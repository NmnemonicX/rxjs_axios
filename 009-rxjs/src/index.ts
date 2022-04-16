import {of, from, timer, range, Observable} from 'rxjs';
const axios = require('axios');
import { HttpService } from '@nestjs/axios';
import {map} from "rxjs/operators";
import Axios from  'axios-observable';
import Axios2 from  'axios-observable';



Axios.get('https://api.github.com/zen')
    .subscribe(
        response => console.log(response.data),
     //   error => console.log(error)
    );

Axios2.get('http://numbersapi.com/random/year')
    .subscribe(
        response => console.log(response.data),
        //   error => console.log(error)
    );
