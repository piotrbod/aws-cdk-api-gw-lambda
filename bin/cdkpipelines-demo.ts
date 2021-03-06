#!/usr/bin/env node
import { App } from '@aws-cdk/core';
import { CdkpipelinesDemoPipelineStack } from '../lib/cdkpipelines-demo-pipeline-stack';
import { CdkpipelinesDemoStage } from '../lib/cdkpipelines-demo-stage';

const app = new App();

new CdkpipelinesDemoPipelineStack(app, 'CdkpipelinesDemoPipelineStack', {
  env: { account: 'ACCOUNT1', region: 'eu-west-1' },
});

new CdkpipelinesDemoStage(app, 'Dev', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});

app.synth();
