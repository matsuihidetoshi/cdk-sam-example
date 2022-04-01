import {Stack, StackProps} from "aws-cdk-lib"
import {Construct} from "constructs"
import * as lambda from "aws-cdk-lib/aws-lambda-nodejs"
import * as apigateway from "aws-cdk-lib/aws-apigateway"

export class CdkSamExampleStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    const backend = new lambda.NodejsFunction(this, "MyFunction", {
      entry: "lambda/hello.ts", // accepts .js, .jsx, .ts, .tsx and .mjs files
      handler: "handler", // defaults to 'handler'
    })

    // API Gatewayを追加
    new apigateway.LambdaRestApi(this, "myApi", {
      handler: backend,
    })
  }
}
