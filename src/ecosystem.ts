import type { Dependency, EcosystemSupport, Project, RootProject } from '@xeel-dev/cli/ecosystem-support';

const ECOSYSTEM_NAME = 'Example'; // TODO: Change this to the name of your ecosystem, like 'npm', or 'python', or 'bun'…

type ExampleProject = Project<typeof ECOSYSTEM_NAME>;
type ExampleRootProject = RootProject<typeof ECOSYSTEM_NAME>;
type ExampleDependency = Dependency<typeof ECOSYSTEM_NAME>;

export default class ExampleEcosystemSupport implements EcosystemSupport<typeof ECOSYSTEM_NAME> {
    get name(): typeof ECOSYSTEM_NAME {
        return ECOSYSTEM_NAME;
    }
    async findProjects(): Promise<ExampleRootProject[]> {
        return []; // TODO
    }
    async listOutdatedDependencies(project: ExampleProject): Promise<ExampleDependency[]> {
        return []; // TODO
    }
}