import axios from 'axios';

var headers = {
    'Content-Type': 'application/json',
    'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtzcmVkZGkuc3JpQGdtYWlsLmNvbSIsImlhdCI6MTUxOTA1ODYwOX0.-nMqxMKHU1DOSXt5vr5fZN-aSeuiCtV4B-pvRhFvBVg"
};

export default{
    
    user: {
        login: (credentials) => axios.post('/api/auth',{credentials},headers).then(res => res.data.user),
        adduser: user => axios.post('/api/users', { user }, headers).then(res => res.data.user)
    }
};