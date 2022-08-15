import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid, Button, Box, TextField,
  Typography, Divider,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useNavigate } from 'react-router-dom';
import { LockOpen, PersonAdd } from '@material-ui/icons';

import { loginUser } from './mapping';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#8eacbb',
    width: '15%',
    // padding: '2%',
    margin: 'auto',
    marginTop: '5%',
    overflow: 'auto',
    opacity: '90%',
  },
  cover: {
    backgroundImage: 'url(sample_images/simple.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingBottom: '13%',
    height: '100%',
    width: '100%',
    overflow: 'auto',
  },
}));

const LoginPage = (props) => {
  const {
    setLoading, setUser,
  } = props;
  const classes = useStyles();
  const navigate = useNavigate();
  const [alert, setAlert] = useState(null);

  const [data, setData] = useState({ email: '', password: '' });

  const handleChange = (prop, val) => {
    setData((prev) => ({ ...prev, [prop]: val }));
  };

  return (
    <Box className={classes.cover}>
      <Box container="true" p={5} flexWrap="wrap" my="50px" borderRadius={5} className={classes.root}>
        {alert && <Alert style={{ marginBottom: '10%' }} severity="error">{alert}</Alert>}

        <Typography variant="h4" component="h4">
          <LockOpen style={{ marginRight: '5%' }} />
          Sign in
        </Typography>
        <form onSubmit={(e) => {
          e.preventDefault();
          loginUser(data, { setLoading, setUser, setAlert });
        }}
        >
          <Grid item xs={12} style={{ marginTop: '10%' }}>
            <TextField
              id="email"
              label="Email"
              type="email"
              variant="outlined"
              onChange={(e) => handleChange('email', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} style={{ marginTop: '10%' }}>
            <TextField
              id="pass"
              label="Password"
              type="password"
              variant="outlined"
              onChange={(e) => handleChange('password', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} style={{ marginTop: '10%' }}>
            <Button type="submit" variant="outlined">
              Sign in
            </Button>
          </Grid>
        </form>
        <Divider style={{ marginTop: '7%', marginBottom: '5%' }} />
        <Typography>
          {'Don\'t have an accoount yet?'}
        </Typography>
        <Button onClick={() => navigate('/register')}>
          <PersonAdd style={{ marginRight: '5%' }} />
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
