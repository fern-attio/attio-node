/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Attio } from "@fern-api/attio";
import * as core from "../../../../core";

export const WorkspaceMember: core.serialization.ObjectSchema<serializers.WorkspaceMember.Raw, Attio.WorkspaceMember> =
    core.serialization.object({
        id: core.serialization.lazyObject(async () => (await import("../../..")).WorkspaceMemberId),
        firstName: core.serialization.property(
            "first_name",
            core.serialization.lazy(async () => (await import("../../..")).WorkspaceMemberFirstName)
        ),
        lastName: core.serialization.property(
            "last_name",
            core.serialization.lazy(async () => (await import("../../..")).WorkspaceMemberLastName)
        ),
        avatarUrl: core.serialization.property(
            "avatar_url",
            core.serialization.lazy(async () => (await import("../../..")).WorkspaceMemberAvatarUrl)
        ),
        emailAddress: core.serialization.property(
            "email_address",
            core.serialization.lazy(async () => (await import("../../..")).WorkspaceMemberEmailAddress)
        ),
        createdAt: core.serialization.property(
            "created_at",
            core.serialization.lazy(async () => (await import("../../..")).WorkspaceMemberCreatedAt)
        ),
        accessLevel: core.serialization.property(
            "access_level",
            core.serialization.lazy(async () => (await import("../../..")).WorkspaceMemberAccessLevel)
        ),
    });

export declare namespace WorkspaceMember {
    interface Raw {
        id: serializers.WorkspaceMemberId.Raw;
        first_name: serializers.WorkspaceMemberFirstName.Raw;
        last_name: serializers.WorkspaceMemberLastName.Raw;
        avatar_url?: serializers.WorkspaceMemberAvatarUrl.Raw;
        email_address: serializers.WorkspaceMemberEmailAddress.Raw;
        created_at: serializers.WorkspaceMemberCreatedAt.Raw;
        access_level: serializers.WorkspaceMemberAccessLevel.Raw;
    }
}