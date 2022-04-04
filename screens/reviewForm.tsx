import { View, Button } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import { globalStyles } from '../styles/global';
import { TextInput } from 'react-native-gesture-handler';

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test(
      'numIsBetween1And5Inclusive',
      'Rating must be a number 1 -5 ',
      (val) => {
        return parseInt(val as string) < 6 && parseInt(val as string) > 0;
      }
    ),
});

export default ({ addReview }: any) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          title: '',
          body: '',
          rating: '',
        }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          // actions.resetForm();
          addReview(values);
        }}
      >
        {(formikProps) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Review Title'
              onChangeText={formikProps.handleChange('title')}
              value={formikProps.values.title}
            />

            <TextInput
              multiline
              style={globalStyles.input}
              placeholder='Review body'
              onChangeText={formikProps.handleChange('body')}
              value={formikProps.values.body}
            />

            <TextInput
              style={globalStyles.input}
              placeholder='Rating (1-5)'
              onChangeText={formikProps.handleChange('rating')}
              value={formikProps.values.rating}
              keyboardType='numeric'
            />

            <Button
              color='maroon'
              title='Submit'
              onPress={() => formikProps.handleSubmit()}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};
