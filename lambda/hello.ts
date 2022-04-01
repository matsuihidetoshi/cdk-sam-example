export const handler = async function (event: any, context: any) {
  console.log(event)
  console.log(context)
  return {
    statusCode: 200,
    headers: {},
    body: { message: 'Hello from Lambda!' }
  }
}
