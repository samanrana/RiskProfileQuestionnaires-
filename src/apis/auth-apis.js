import axios from 'axios';
import {BASE_URL} from './apis';

export const onLogin = async details =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: 'post',
        url: `${BASE_URL}/login`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          email: details?.email,
          password: details?.password,
        },
      });
      const {data} = await response;
      console.log('response here for login', response);
      resolve(data);
    } catch (error) {
      console.log('login', 'error', error);
      reject(error);
    }
  });

export const onRegister = async details =>
  new Promise(async (resolve, reject) => {
    try {
      console.log('email will be', details?.email);
      const response = await axios({
        method: 'post',
        url: `${BASE_URL}/register`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          email: details?.email,
          password: details?.password,
        },
      });
      const {data} = await response;
      console.log('response here for register', response);
      resolve(data);
    } catch (error) {
      console.log('register', 'error', error);
      reject(error);
    }
  });

export const updateProfileList = async details =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: 'post',
        url: `${BASE_URL}/updateProfile/${details?.id}`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          name: details?.name,
          username: details?.username,
          bio: details?.bio,
          token: details?.token,
        },
      });
      const {data} = await response;
      console.log('response here for Updateprofile', response);
      resolve(data);
    } catch (error) {
      console.log('Updateprofile', 'error', error);
      reject(error);
    }
  });

export const onProfileDetail = async details =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: 'post',
        url: `${BASE_URL}/getProfile/${details?.id}`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          token: details?.token,
        },
      });
      const {data} = await response;
      console.log('response here for getprofile', response);
      resolve(data);
    } catch (error) {
      console.log('getprofile', 'error', error);
      reject(error);
    }
  });

export const onDeleteAccount = async details =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: 'post',
        url: `${BASE_URL}/deleteuser_history`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          token: details?.token,
        },
      });
      const {data} = await response;
      console.log('response here for getprofile', response);
      resolve(data);
    } catch (error) {
      console.log('getprofile', 'error', error);
      reject(error);
    }
  });
