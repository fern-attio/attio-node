/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Attio } from "@fern-api/attio";
import * as core from "../../../../../../core";

export const ObjectCreatedAt: core.serialization.Schema<
    serializers.particle.ObjectCreatedAt.Raw,
    Attio.particle.ObjectCreatedAt
> = core.serialization.string();

export declare namespace ObjectCreatedAt {
    type Raw = string;
}
