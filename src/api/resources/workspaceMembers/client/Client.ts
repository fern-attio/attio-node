/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { Attio } from "@fern-api/attio";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace WorkspaceMembers {
    interface Options {
        environment?: environments.AttioEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class WorkspaceMembers {
    constructor(private readonly options: WorkspaceMembers.Options) {}

    /**
     * Gets a single Workspace Member by ID.
     */
    public async get(workspaceMemberId: string): Promise<Attio.GetMemberResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.AttioEnvironment.Production,
                `/v2/workspace_members/${workspaceMemberId}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return await serializers.GetMemberResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.AttioError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.AttioError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.AttioTimeoutError();
            case "unknown":
                throw new errors.AttioError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Lists all Workspace Members in the Workspace.
     */
    public async list(): Promise<Attio.GetAllMemberResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.AttioEnvironment.Production, "/v2/workspace_members"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return await serializers.GetAllMemberResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.AttioError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.AttioError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.AttioTimeoutError();
            case "unknown":
                throw new errors.AttioError({
                    message: _response.error.errorMessage,
                });
        }
    }

    private async _getAuthorizationHeader() {
        const bearer = await core.Supplier.get(this.options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}