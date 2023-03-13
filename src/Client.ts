/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Particle } from "./api/resources/particle/client/Client";
import { WorkspaceMembers } from "./api/resources/workspaceMembers/client/Client";

export declare namespace AttioClient {
    interface Options {
        environment?: environments.AttioEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class AttioClient {
    constructor(private readonly options: AttioClient.Options) {}

    private _particle: Particle | undefined;

    public get particle(): Particle {
        return (this._particle ??= new Particle(this.options));
    }

    private _workspaceMembers: WorkspaceMembers | undefined;

    public get workspaceMembers(): WorkspaceMembers {
        return (this._workspaceMembers ??= new WorkspaceMembers(this.options));
    }
}
