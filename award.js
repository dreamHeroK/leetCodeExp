import fetch from 'node-fetch';
async function award(giftCode) {

    let res = await fetch("https://embedded.kongzhong.com/newgiftcard/giftcard/receive?userName=17293822637845432117&giftCode=DOUYU4F18315", {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "zh-CN,zh;q=0.9",
            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"99\", \"Google Chrome\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "token": "eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjY4OTQzNGZhLWVhZDMtNDQ5OC1iYzc3LWE3ZTYwZTY4M2ExMSJ9.B2whRlKLsRwkr06yjJsYIJwMUtW760a0W4c-rCXXbKgjWOB-ku5ElnAQpHR1-uWUHnAOeHqYQbdlF_ZNfELrQg"
        },
        "referrer": "https://act.kongzhong.com/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
    });
    if (res.msg !== '处理成功') {
        console.log(giftCode)
    }
}

let arr = ['DOUYU9EEA8AF', 'DOUYU52D6C01',
    'DOUYUC285600', 'DOUYUB0C24D6', 'DOUYUA3B41BD',
    'DOUYUB90399E', 'DOUYU4E14EA8', 'DOUYU507E2C2',
    'DOUYUC521FAB', 'DOUYU9FF7BF1', 'DOUYUB659108',
    'DOUYUB38F19B', 'DOUYUA424776', 'DOUYU521DD62',
    'DOUYUBE24C78', 'DOUYU507BAC9', 'DOUYUCF348CC',
    'DOUYUB66AD92', 'DOUYUA494682', 'DOUYUB0BA1BE',
    'DOUYU9E865A5', 'DOUYUC0EA1D0', 'DOUYU55BC251',
    'DOUYUC4C24FE', 'DOUYU5643276', 'DOUYU9E67861',
    'DOUYUB85F6ED', 'DOUYUA5CF728', 'DOUYUB16B148',
    'DOUYUB1C4D54', 'DOUYUA47D8E6', 'DOUYU9E37B7C',
    'DOUYUB8BBA9F', 'DOUYUBFB2704', 'DOUYU573F8FB',
    'DOUYU513F13F', 'DOUYUA0B23EA', 'DOUYUB37579C',
    'DOUYUA456B30', 'DOUYUB821E3C', 'DOUYU50233AD',
    'DOUYU9D450D5', 'DOUYUBA69272', 'DOUYUB068B0E'
]

for (let i = 0; i < arr.length; i++) {
    await award(arr[i])
}
