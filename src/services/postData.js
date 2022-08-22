/* eslint-disable no-console */
import React from "react"
import {
  useMutation,
  QueryClient,
  useQueryClient,
} from "@tanstack/react-query";
import { wordsNumber, isValidEmail } from './ValidationFunctions'
import axios from "axios";

async function PostData(data) {



  if (wordsNumber(data.message) && isValidEmail(data.message)) {

    const response = await axios.patch('http://localhost:8000/adminDashboard/1', data);
  }
  else {
    console.log('what')
  }
}
export default PostData;

