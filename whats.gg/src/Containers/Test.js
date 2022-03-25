import React from "react";


function Test() {
  var request = require('request');
  
  const riotKey = "api_key=RGAPI-94470908-89a4-4e10-89e1-198260a229dc";
  
  // request to riots api
  let name = "hideonbush";
  const url = 'https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+name+'?'+riotKey
  
  // LOL API Call
  request.get(url, function(error, response, body){
    var info_jason = JSON.parse(body);
    console("info_jason : " + info_jason);

    var key = Object.keys(info_jason);
    console("key : " + key);

    var result = "id : " + info_jason[key]["id"] +
                " name : " + info_jason[key]["name"] +
                " profileIconId : " + info_jason[key]["profileIconId"] +
                " summonerLevel : " + info_jason[key]["summonerLevel"] +
                " revisionDate : " + info_jason[key]["revisionDate"];
     console.log(result);     
     return(
        result
     );
  });


  // "id": "luya0dUbXx1j5pLZSFngAeWImp3DJnJaY9cLd02uYhqmdA",
  //   "accountId": "RDEY2WslTmErBTulv84nGtM1krLX-X6pvIGbxOzRbgEp",
  //   "puuid": "ceOnrlCVc3BI9ESLSyZqgf94wnij3tMDM-lhGznZWuY21RuscWJPN_vpUkc_QcSMt2GtJV-3cxz79w",
  //   "name": "Hide on bush",
  //   "profileIconId": 6,
  //   "revisionDate": 1647686392000,
  //   "summonerLevel": 554
  
    // return(
    //   <>
    //       <h1>test</h1>
    //       테스트 페이지
    //   </>
    // );
}

export default Test