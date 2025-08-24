document.getElementById("button").onclick = function() {
  const name = document.getElementById("name").value.trim();
  const year = document.getElementById("year").value.trim();

  let params = [];
  if (name.length > 0) {
    params.push("name=" + encodeURIComponent(name));
  }
  if (year.length > 0) {
    params.push("year=" + encodeURIComponent(year));
  }

  let url = "https://localhost:8080/";
  if (params.length > 0) {
    url += "?" + params.join("&");
  }

  document.getElementById("url").textContent = url;
};
