import config from "../config";

const FootPrintApiService = {
  getAllPrints() {
    return fetch(`${config.API_ENDPOINT}/footprints`, {
      headers: {}
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getPrint(id) {
    return fetch(`${config.API_ENDPOINT}/footprints/${id}`, {
      headers: {}
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  deletePrint(id) {
    return fetch(`${config.API_ENDPOINT}/footprints/${id}/`, {
      headers: {}
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  updatePrint(id) {
    return fetch(`${config.API_ENDPOINT}/footprints/${id}/`, {
      headers: {}
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  postPrints(id, product_name, date_purchased, date_sold, sold_price) {
    return fetch(`${config.API_ENDPOINT}/footprints`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        article_id: articleId,
        text
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default FootPrintApiService;
