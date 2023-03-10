/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Attio } from "@fern-api/attio";
import * as core from "../../../../../../core";

export const ObjectSingularNoun: core.serialization.Schema<
    serializers.particle.ObjectSingularNoun.Raw,
    Attio.particle.ObjectSingularNoun
> = core.serialization.string().optional();

export declare namespace ObjectSingularNoun {
    type Raw = string | null | undefined;
}
