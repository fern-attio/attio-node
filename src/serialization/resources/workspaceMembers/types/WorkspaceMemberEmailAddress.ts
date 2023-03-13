/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Attio } from "@fern-api/attio";
import * as core from "../../../../core";

export const WorkspaceMemberEmailAddress: core.serialization.Schema<
    serializers.WorkspaceMemberEmailAddress.Raw,
    Attio.WorkspaceMemberEmailAddress
> = core.serialization.string();

export declare namespace WorkspaceMemberEmailAddress {
    type Raw = string;
}