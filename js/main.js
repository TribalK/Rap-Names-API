document.querySelector('button').addEventListener('click', runAPI);

async function runAPI() {
  const name = document.querySelector('input').value;
  const res = await fetch(`/api/${name}`);
  const json = await res.json();

  document.querySelector('h2').innerHTML = json.birthName;
}
