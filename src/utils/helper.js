const findImageOwner = (arr1, arr2) => {
  return arr1.map(item => {
    let temp = arr2[item.id];
    if (arr2[item.id]) {
      item["image"] = temp;
      return item;
    } else {
      return item;
    }
  });
};



export function buildLink(slug) {
  if (window.location.pathname.includes("uk-UA")) {
    return `/uk-UA/${slug}`;
  } 
  return `/${slug}`;
}

export default findImageOwner;
