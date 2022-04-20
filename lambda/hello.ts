export const handler = async function (event: any, context: any) {
  console.log("************ debug");
  console.log(JSON.stringify(process.env));
  return {
    statusCode: 200,
    headers: {},
    body: {
      message:
        "Hello from " + JSON.parse(event.body).hello + process.env["DB_HOST"],
    },
  };
};
