function filterFlims(filmsList, { search, isShort }) {
  let resultBySearchInfo = [];
  function searchInlistBySearchInfo(list) {
    list.forEach((item) => {
      searchInCard(item);
    });
  }
  function searchInCard(card) {
    for (const el in card) {
      if (
        card[el] &&
        card[el].toString().toLowerCase().includes(search.toLowerCase())
      ) {
        resultBySearchInfo.push(card);
      }
    }
  }
  searchInlistBySearchInfo(filmsList);

  let resultByIsShortInfo = [];
  if (isShort) {
    resultBySearchInfo.forEach((item) => {
      console.log(item.duration);
      if (item.duration < 40) {
        resultByIsShortInfo.push(item);
      }
    });
  } else {
    resultByIsShortInfo = resultBySearchInfo;
  }

  let resultCheckedByRepeat = [];
  if (resultByIsShortInfo.length > 0) {
    resultByIsShortInfo.forEach((item) => {
      if (resultCheckedByRepeat.length === 0) {
        resultCheckedByRepeat.push(item);
      } else {
        let isRepeat = false;
        resultCheckedByRepeat.forEach((element) => {
          if (element.id === item.id) {
            isRepeat = true;
          }
        });
        if (!isRepeat) {
          resultCheckedByRepeat.push(item);
        }
      }
    });
  }

  return resultCheckedByRepeat;
}
export default filterFlims;
