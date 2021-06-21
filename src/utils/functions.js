const checkImg = (src, good, bad) => {
  let img = new Image();
  img.onload = good;
  img.onerror = bad;
  img.src = src;
};

export default checkImg;
