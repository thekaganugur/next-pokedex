export function client<Response>(
  url: string,
  { body, ...customConfig }: RequestInit = {}
) {
  const config: RequestInit = {
    method: body ? "POST" : "GET",
    ...customConfig,
    headers: {
      "Content-Type": "application/json",
      ...customConfig.headers,
    },
  }

  if (body) {
    config.body = typeof body === "object" ? JSON.stringify(body) : body
  }

  return fetch(url, config).then((res) => res.json() as Response)
  // return fetch(url, config).then((response) => {
  //   if (response.ok) {
  //     return response.json() as Response;
  //   } else {
  //     response.text().then((errorMessage) => {
  //       Promise.reject(new Error(errorMessage));
  //     });
  //   }
  // });
}

export type Pagination<T> = {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}

// const sleep = async () => {
//   await new Promise((resolve) => {
//     return setTimeout(resolve, 3000)
//   })
// }

export async function pokemonClient<Response>(
  endpoint: string,
  config: RequestInit = {}
) {
  // await sleep()
  return client<Response>(`https://pokeapi.co/api/v2/${endpoint}`, config)
}

export function getPokemons(
  {
    limit,
    page = 1,
  }: {
    limit: number
    page?: number
  },
  config?: RequestInit
) {
  const offset = limit * (page - 1)

  return pokemonClient<Pagination<{ name: string; url: string }>>(
    `pokemon?offset=${offset}&limit=${limit}`,
    config
  )
}
