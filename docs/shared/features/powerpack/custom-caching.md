# Self-Host the Remote Cache

The recommended way to enable the [remote cache](/ci/features/remote-cache) is to use Nx Replay and have Nx Cloud share the task cache across your organization. For those organizations that are unable to use Nx Cloud, Nx offers official plugins that are enabled by [Nx Powerpack]() to self-host the remote cache in a fast and secure manner. The recommended ways to host the remote cache are, in order of preference:

1. [Nx Replay](/ci/features/remote-cache): Cache is hosted on Nx Cloud servers or on-premise with an [Nx Enterprise](/enterprise) contract
2. [@nx/powerpack-s3-cache](/nx-api/powerpack-s3-cache): Cache is on a self-hosted, fully secure AWS S3 bucket
3. [@nx/powerpack-shared-fs-cache](/nx-api/powerpack-s3-cache): Cache is self-hosted and self-secured on a shared file system location

The options range from fully opting in to Nx's management of the remote cache to fully managing the configuration and security of your own remote cache.

## Self-Hosted Remote Cache Plugins Require Nx Powerpack

The `@nx/powerpack-s3-cache` and `@nx/powerpack-shared-fs-cache` plugins require an Nx Powerpack license to function. [Activating Powerpack](/recipes/installation/activate-powerpack) is a simple process.

{% call-to-action title="Buy a Powerpack License" icon="nx" description="Unlock all the features of the Nx CLI" url="https://nx.app/nx-powerpack/purchase" /%}

## Choose Your Storage Solution

Read the individual plugin documentation for specific set up instructions.

{% cards cols="2" lgCols="2" mdCols="2" smCols="2" %}

{% link-card title="AWS S3 Bucket Remote Cache" type="Nx Plugin" url="/nx-api/powerpack-s3-cache" icon="AwsIcon" /%}

{% link-card title="Shared Network Drive Remote Cache" type="Nx Plugin" url="/nx-api/powerpack-shared-fs-cache" icon="ServerIcon" /%}

{% /cards %}

## Switch to Nx Cloud

These custom remote cache storage solutions only provide the remote cache functionality of Nx Cloud. If you want to leverage [distributed task execution](/ci/features/distribute-task-execution), [re-running flaky tasks](/ci/features/flaky-tasks) or [automatically splitting tasks](/ci/features/split-e2e-tasks), you'll need to [connect to Nx Cloud](/ci/intro/connect-to-nx-cloud) and use Nx Cloud's remote cache solution instead.

{% call-to-action title="Connect to Nx Cloud" icon="nxcloud" description="Enable task distribution and Atomizer" url="/ci/intro/connect-to-nx-cloud" /%}
