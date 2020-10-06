import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

export async function handler(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
  return {
    body: 'Hello from a Lambda Function - Morning 6th Oct 2020 - Demo!',
    statusCode: 200,
  };
}
