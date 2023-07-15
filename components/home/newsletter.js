import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Axios from 'axios';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import AppTextField from '../Formik/AppTextField';
import { Button, FormControl, Grid, InputLabel } from '@mui/material';
import CustomizedSelectFormik from '../Formik/CustomizedSelectFormik';

const All = [
  { key: 1, text: 'Physics', value: 'Physics' },
  { key: 2, text: 'Chemistry', value: 'Chemistry' },
  { key: 3, text: 'Mathematics', value: 'Mathematics' },
  { key: 4, text: 'Biology', value: 'Biology' },
  { key: 5, text: 'Science', value: 'Science' },
  { key: 6, text: 'Language', value: 'Language' },
];
const validationSchema = yup.object({
  name: yup
    .string()
    .required('Name is required'),
  email: yup
    .string()
    .email('Please enter valid email ID')
    .required('Email ID is required'),
  mobilenumber: yup
    .string()
    .required('Mobile Number is mandatory')
    .matches(/^[0-9]+$/, 'Only digits are allowed for this field ')
    .length(10, 'Only 10 digit mobile number'),
  selection: yup
    .string()
    .required('It is required'),
});

const HomeNewsLetter = () => {
  const onSubmit = async (values, submitProps) => {
    console.log({ values })
    Axios.post("/api/sendemail", {
      name: values.name,
      email: values.email,
      mobileno: values.mobilenumber,
      msg: values.msg,
      selection: values.selection

    })
      .then(function (response) {
        //handle success
        console.log('Success')
        setModal(true);
        setStudname(values.name);
        submitProps.setSubmitting(false);
        submitProps.resetForm();
      })
      .catch(function (response) {
        //handle error
        // alert("Error in submission. Please resubmit");
      });
  };

  return (
    <Box sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 } }}>
      <Container >
        <Box sx={{
          backgroundColor: 'secondary.main',
          borderRadius: 10,
          py: { xs: 4, md: 10 },
          px: { xs: 4, md: 8 },
          textAlign: 'center',
        }}>
          <Formik
            validateOnChange={true}
            initialValues={{
              name: '',
              email: '',
              mobilenumber: '',
              msg: '',
              selection: ''
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ initialValues, values, errors, isSubmitting }) => (
              <Form style={{ textAlign: 'left' }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <AppTextField
                      placeholder='name'
                      name='name'
                      label='Name'
                      sx={{
                        width: '100%',
                        '& .MuiInputBase-input': {
                          fontSize: 14,
                        },
                      }}
                      variant='outlined'
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <AppTextField
                      placeholder='Email'
                      name='email'
                      label='Email ID'
                      sx={{
                        width: '100%',
                        '& .MuiInputBase-input': {
                          fontSize: 14,
                        },
                      }}
                      variant='outlined'
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <AppTextField
                      placeholder='Mobile Number'
                      name='mobilenumber'
                      label='Mobile Number'
                      sx={{
                        width: '100%',
                        '& .MuiInputBase-input': {
                          fontSize: 14,
                        },
                      }}
                      variant='outlined'
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl
                      sx={{
                        width: '100%',
                        // mt: 2,
                        '&.MuiInputBase-input': { fontSize: 14 },
                      }}
                    >
                      <InputLabel id='demo-simple-select-label'>
                        Select your interest
                      </InputLabel>
                      <Field
                        name='selection'
                        as='select'
                        options={All}
                        component={CustomizedSelectFormik}
                      ></Field>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} >
                    <Box sx={{ mb: { xs: 5, lg: 8 } }}>
                      <AppTextField
                        placeholder='Message'
                        name='msg'
                        label='Message'
                        sx={{
                          width: '100%',
                          '& .MuiInputBase-input': {
                            fontSize: 14,
                          },
                        }}
                        variant='outlined'
                        multiline
                        rows='2'
                      />
                    </Box>
                  </Grid>
                </Grid>
                <pre>{JSON.stringify(errors, null, 4)}</pre>
                <pre>{JSON.stringify(values, null, 4)}</pre>

                <div>
                  <Button
                    variant='contained'
                    color='primary'
                    disabled={isSubmitting}
                    sx={{
                      // fontWeight: Fonts.REGULAR,
                      textTransform: 'capitalize',
                      fontSize: 16,
                      minWidth: 160,
                    }}
                    type='submit'
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
          {/* <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
            Subscribe to Our News Letter
          </Typography>
          <Typography sx={{ mb: 6 }}>Subscribe to our newsletter to get information about our courses.</Typography>

          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-around',
            width: { xs: '100%', md: 560 },
            mx: 'auto',
        }}>
            <InputBase sx={{
            backgroundColor: 'background.paper',
            borderRadius: 3,
            width: '100%',
            height: 48,
            px: 2,
            mr: { xs: 0, md: 3 },
            mb: { xs: 2, md: 0 },
        }} 
        placeholder="Enter your Email Address"></InputBase>
            <Box>
              <StyledButton disableHoverEffect size="large" onClick={onSubmit} >
                Subscribe
              </StyledButton>
            </Box>
          </Box> */}
        </Box>
      </Container>
    </Box>
  );
};
export default HomeNewsLetter;
