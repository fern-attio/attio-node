/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Attio } from "@fern-api/attio";
import * as core from "../../../../core";

export const WorkspaceMemberId: core.serialization.ObjectSchema<
    serializers.WorkspaceMemberId.Raw,
    Attio.WorkspaceMemberId
> = core.serialization.object({
    workspaceId: core.serialization.property(
        "workspace_id",
        core.serialization.lazy(async () => (await import("../../..")).WorkspaceMemberWorkspaceId)
    ),
    workspaceMemberId: core.serialization.property(
        "workspace_member_id",
        core.serialization.lazy(async () => (await import("../../..")).WorkspaceMemberWorkspaceMemberId)
    ),
});

export declare namespace WorkspaceMemberId {
    interface Raw {
        workspace_id: serializers.WorkspaceMemberWorkspaceId.Raw;
        workspace_member_id: serializers.WorkspaceMemberWorkspaceMemberId.Raw;
    }
}
