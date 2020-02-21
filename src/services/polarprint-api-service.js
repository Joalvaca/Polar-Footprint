import config from "../config";

const FootPrintApiService = {
  getAllPrints() {
    return fetch(`${config.API_ENDPOINT}/footprints`, {
      method: "GET",
      headers: { "content-type": "application/json" }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getPrint(printId) {
    return fetch(`${config.API_ENDPOINT}/footprints/${printId}`, {
      method: "GET",
      headers: { "content-type": "application/json" }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  deletePrint(printId) {
    return fetch(`${config.API_ENDPOINT}/footprints/${printId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  updatePrint(printId) {
    return fetch(`${config.API_ENDPOINT}/footprints/${printId}/`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  postPrints(product_name, date_purchased, date_sold, sold_price) {
    return fetch(`${config.API_ENDPOINT}/footprints`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        print_id: printId,
        product_name,
        date_purchased,
        date_sold,
        sold_price
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default FootPrintApiService;
