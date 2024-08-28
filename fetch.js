import fetch from 'node-fetch';

async function request() {
  let res = await fetch("https://www.douyu.com/japi/carnivalApi/lottery/play", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "zh-CN,zh;q=0.9",
      "content-type": "application/x-www-form-urlencoded",
      "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"99\", \"Google Chrome\";v=\"99\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-dy-traceid": "7125ee7a02d575cf:7125ee7a02d575cf:0:000235",
      "x-requested-with": "XMLHttpRequest",
      "cookie": "dy_did=094c0aba7e9be3eae29b523b00011501; acf_did=094c0aba7e9be3eae29b523b00011501; Hm_lvt_e99aee90ec1b2106afe7ec3b199020a7=1656417056,1656520702,1656594734,1656679668; PHPSESSID=nubt2l1kqkr5kulmju4og0r7l6; acf_auth=d701pvCOqP1tE7t6TrANgjkgijJQv6pwRpVOjrBW2UmxPIJIrtHf6GAi8Xc4yFwq%2BIdhxEG15LBq0x0XKx0wzVrxISdetNYDOnRpDpsdy5AnE%2FkdpW1BQg; dy_auth=2ef2416vtigTZmpNX8tEzzGXMw4u%2BL8uGURQ3Gk6Oz2jkxbBzudOVIkTsJXhsTOehPo4ufBNM0iByr3A0dyPjbQqHwKRtSsy4Pdh2o1GC913%2BpDBY%2BWLYQ; wan_auth37wan=6ab6fa2b71aeP7PGLiYzLzLeninM5wfJ6EdvXfOEtph2dvWjRCGmotCNFGgmk1kwnBdCHts172dF%2F5e5GXhFoFbBIThUcuOI9YL%2BZWKLyupIw0w; acf_uid=429085; acf_username=qq_dKbjUjoY; acf_nickname=%E8%8B%A5%E4%B8%A7%E5%BF%83%E7%97%85%E7%8B%82; acf_own_room=1; acf_groupid=1; acf_phonestatus=1; acf_avatar=https%3A%2F%2Fapic.douyucdn.cn%2Fupload%2Favatar%2Fdefault%2F08_; acf_ct=0; acf_ltkid=45382268; acf_biz=1; acf_stk=e8bd2e2840926211; Hm_lpvt_e99aee90ec1b2106afe7ec3b199020a7=1656691360; cvl_csrf_token=aa58bcea8e124b989687361c7acc9119",
      "Referer": "https://www.douyu.com/topic/jz_3_1?rid=9375543",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": "alias=20220610GW2_draw1&batch=1&csrfToken=aa58bcea8e124b989687361c7acc9119",
    "method": "POST"
  });

  const body = await res.json();
  // console.log(body,'body')
  console.log(body.data.bagName)
}

for (let index = 0; index <17 ; index++) {
  await request()
}