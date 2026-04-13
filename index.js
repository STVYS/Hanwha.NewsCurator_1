const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxe4S6sKsEC5BUyMOHvqpBTsnzfeELdPOnPNXhkye1gpEt_jF5-pPkwv46HcM6Iie4CtQ/exec';

export default {
  async fetch(request) {
    const response = await fetch(APPS_SCRIPT_URL);
    const data = await response.text();
    return new Response(data, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
};
