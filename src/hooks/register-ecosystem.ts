import type { Hook } from '@oclif/core';
import ExampleEcosystemSupport from '../ecosystem.js';

const hook: Hook<'register-ecosystem'> = async function () {
  return new ExampleEcosystemSupport();
};

export default hook;
