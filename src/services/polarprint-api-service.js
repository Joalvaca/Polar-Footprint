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
      headers: {
        "content-type": "application/json"
      }
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
    }).then(res => (!res.ok ? res.json().then(e => Promise.reject(e)) : res));
  },
  updatePrint(editedItem) {
    console.log(editedItem);
    return fetch(`${config.API_ENDPOINT}/footprints/${editedItem.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        //print_id: product_name,
        product_name: editedItem.product_name,
        date_purchased: editedItem.date_purchased,
        purchase_price: editedItem.purchase_price,
        date_sold: editedItem.date_sold,
        sold_price: editedItem.sold_price
      })
    }).then(res => (!res.ok ? res.json().then(e => Promise.reject(e)) : res));
  },
  postPrints(newItem) {
    return fetch(`${config.API_ENDPOINT}/footprints`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        //print_id: product_name,
        product_name: newItem.product_name,
        date_purchased: newItem.date_purchased,
        purchase_price: newItem.purchase_price,
        date_sold: newItem.date_sold,
        sold_price: newItem.sold_price
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default FootPrintApiService;
