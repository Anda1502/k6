import http from 'k6/http';
import { check } from 'k6';
import { sleep } from 'k6';

export const options = {
    vus: 10,
    duration: '10s', 
    thresholds: {
        http_req_duration: ['p(95)<500'],
       // http_req_failed: ['count<5']
        http_reqs: ['count>20'],
        http_reqs: ['rate>4']
    }
}

export default function () {
    const res = http.get('https://quickpizza.grafana.com/test.k6.io/');
check(res, {
    'status is 200': (r) => r.status === 200, 
    'page is startpage': (r) => r.body.includes('QuickPizza Legacy')
});
sleep(2);
}