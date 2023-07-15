import React from 'react';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { StyledButton } from '../styled-button';
import Axios from 'axios';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import AppTextField from '../AppTextField';
import { Button } from '@mui/material';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Please enter valid email ID')
    .required('Email ID is required'),
  mobilenumber: yup
    .string()
    .required('Mobile Number is mandatory')
    .matches(/^[0-9]+$/, 'Only digits are allowed for this field ')
    .length(10, 'Only 10 digit mobile number'),
});

const HomeNewsLetter = () => {
  const onSubmit = async (values, submitProps) => {
    console.log({ values })
    Axios.post("/api/sendemail", {
      email: values.email,
      mobileno: values.mobilenumber,
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
              email: '',
              mobilenumber: '',
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          // onSubmit={(data, { setSubmitting, resetForm }) => {
          // setSubmitting(true);
          // console.log({ data })
          // jwtAxios.post('/forgetpass', data).then(function (res) {
          //   toast.success(res.data.message, { hideProgressBar: false });
          //   // console.log(res)
          //   resetForm({});
          //   history.push('/signin', { tab: 'jwtAuth' });
          // })
          //   .catch(function (error) {
          //     // console.log(error.response)
          //     if (error.response)
          //       error.response.status === 400 ? dispatch(fetchError(messages['form.error1'])) :
          //         toast.error(error.response.data);
          //     resetForm({});
          //   })
          // setSubmitting(false);
          // resetForm();
          // }}
          >
            {({ isSubmitting }) => (
              <Form style={{ textAlign: 'left' }}>
                <Box sx={{ mb: { xs: 5, lg: 8 } }}>
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
                </Box>
                <Box sx={{ mb: { xs: 5, lg: 8 } }}>
                  <AppTextField
                    // placeholder='Mobile Number L'
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
                </Box>
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
            {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
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
