import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getQuestions: function(searchterm) {
    console.log("getting Questions for "+ searchterm);
    return axios.get("https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=" + searchterm + "&site=stackoverflow&filter=withbody");
  },
  getAnswerIds: function(id) {
    console.log("getting Answers IDs for "+ id);
    return axios.get("https://api.stackexchange.com/2.2/questions/" + id + "/answers?order=desc&sort=activity&site=stackoverflow");
  },
  getAnswersByArr: function(arr) {
    console.log("getting Answers for "+ arr);
    var ids = arr;
    // for(let i=1; i < arr.length; i++){
    //   ids = ids + ";" + arr[i];
    // }
    return axios.get("https://api.stackexchange.com/2.2/answers/" + ids + "?order=desc&sort=activity&site=stackoverflow&filter=withbody");
  },
  getAnswers: function(id) {
    console.log("getting Answers for "+ id);
    return axios.get("https://api.stackexchange.com/2.2/questions/" + id + "/answers?order=desc&sort=activity&site=stackoverflow")
      .then(function (response) {
        console.log(JSON.stringify(response.data.items[0], null, 2));
        console.log(JSON.stringify(response.data.items[0].answer_id, null, 2));
        var ids = response.data.items[0].answer_id;
        for(let i=1; i < response.data.items.length; i++){
          ids = ids + ";" + response.data.items[i].answer_id;
        }
        return axios.get("https://api.stackexchange.com/2.2/questions/" + ids + "/answers?order=desc&sort=activity&site=stackoverflow&filter=withbody");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
};
