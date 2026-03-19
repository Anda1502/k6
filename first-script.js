import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 10, 
    duration: '11s'
}

export default function () {
    http.get('https://quickpizza.grafana.com/test.k6.io/');
    sleep(1);
}