# Welcome to your CDK TypeScript project!

This is a blank project for TypeScript development with CDK and is effectively and output of the excercise described in this article: https://aws.amazon.com/blogs/developer/cdk-pipelines-continuous-delivery-for-aws-cdk-applications/

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Requirements
1. Clone this repo to your machine
2. Edit "lib/cdkpipelines-demo-pipeline-stack.ts" file and enter your github repo details under "// Where the source can be found" comment. 
- Change: "owner" and "repo" details where 'owner' is your github name and 'repo' is your github repository name.
- Change account details under: "pipeline.addApplicationStage" function to match your AWS accounts details.
3. Edit "bin/cdkpipelines-demo.ts" file and change AWS account details to match your AWS accounts details.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
