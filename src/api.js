const BASE_PATH_WEATHER = 'https://tourism.opendatahub.bz.it/api/Weather';

export async function district_details_api_call(id) {
  this.is_loading = true;
  const path = `${BASE_PATH_WEATHER}/District?language=${this.language_translation}&locfilter=${id}`;
  let request = await fetch(path, {
    method: 'GET',
    headers: new Headers({
      Accept: 'application/json',
      Authorization: `Bearer ${this.token}`
    })
  });

  const response = await request.json();
  this.district_details = response;
}
