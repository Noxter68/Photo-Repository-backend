import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ActivationModel = runtime.Types.Result.DefaultSelection<Prisma.$ActivationPayload>;
export type AggregateActivation = {
    _count: ActivationCountAggregateOutputType | null;
    _min: ActivationMinAggregateOutputType | null;
    _max: ActivationMaxAggregateOutputType | null;
};
export type ActivationMinAggregateOutputType = {
    id: string | null;
    licenseId: string | null;
    machineId: string | null;
    activatedAt: Date | null;
    lastSeen: Date | null;
};
export type ActivationMaxAggregateOutputType = {
    id: string | null;
    licenseId: string | null;
    machineId: string | null;
    activatedAt: Date | null;
    lastSeen: Date | null;
};
export type ActivationCountAggregateOutputType = {
    id: number;
    licenseId: number;
    machineId: number;
    activatedAt: number;
    lastSeen: number;
    _all: number;
};
export type ActivationMinAggregateInputType = {
    id?: true;
    licenseId?: true;
    machineId?: true;
    activatedAt?: true;
    lastSeen?: true;
};
export type ActivationMaxAggregateInputType = {
    id?: true;
    licenseId?: true;
    machineId?: true;
    activatedAt?: true;
    lastSeen?: true;
};
export type ActivationCountAggregateInputType = {
    id?: true;
    licenseId?: true;
    machineId?: true;
    activatedAt?: true;
    lastSeen?: true;
    _all?: true;
};
export type ActivationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActivationWhereInput;
    orderBy?: Prisma.ActivationOrderByWithRelationInput | Prisma.ActivationOrderByWithRelationInput[];
    cursor?: Prisma.ActivationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ActivationCountAggregateInputType;
    _min?: ActivationMinAggregateInputType;
    _max?: ActivationMaxAggregateInputType;
};
export type GetActivationAggregateType<T extends ActivationAggregateArgs> = {
    [P in keyof T & keyof AggregateActivation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateActivation[P]> : Prisma.GetScalarType<T[P], AggregateActivation[P]>;
};
export type ActivationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActivationWhereInput;
    orderBy?: Prisma.ActivationOrderByWithAggregationInput | Prisma.ActivationOrderByWithAggregationInput[];
    by: Prisma.ActivationScalarFieldEnum[] | Prisma.ActivationScalarFieldEnum;
    having?: Prisma.ActivationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ActivationCountAggregateInputType | true;
    _min?: ActivationMinAggregateInputType;
    _max?: ActivationMaxAggregateInputType;
};
export type ActivationGroupByOutputType = {
    id: string;
    licenseId: string;
    machineId: string;
    activatedAt: Date;
    lastSeen: Date;
    _count: ActivationCountAggregateOutputType | null;
    _min: ActivationMinAggregateOutputType | null;
    _max: ActivationMaxAggregateOutputType | null;
};
export type GetActivationGroupByPayload<T extends ActivationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ActivationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ActivationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ActivationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ActivationGroupByOutputType[P]>;
}>>;
export type ActivationWhereInput = {
    AND?: Prisma.ActivationWhereInput | Prisma.ActivationWhereInput[];
    OR?: Prisma.ActivationWhereInput[];
    NOT?: Prisma.ActivationWhereInput | Prisma.ActivationWhereInput[];
    id?: Prisma.StringFilter<"Activation"> | string;
    licenseId?: Prisma.StringFilter<"Activation"> | string;
    machineId?: Prisma.StringFilter<"Activation"> | string;
    activatedAt?: Prisma.DateTimeFilter<"Activation"> | Date | string;
    lastSeen?: Prisma.DateTimeFilter<"Activation"> | Date | string;
    license?: Prisma.XOR<Prisma.LicenseScalarRelationFilter, Prisma.LicenseWhereInput>;
};
export type ActivationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    licenseId?: Prisma.SortOrder;
    machineId?: Prisma.SortOrder;
    activatedAt?: Prisma.SortOrder;
    lastSeen?: Prisma.SortOrder;
    license?: Prisma.LicenseOrderByWithRelationInput;
};
export type ActivationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    licenseId_machineId?: Prisma.ActivationLicenseIdMachineIdCompoundUniqueInput;
    AND?: Prisma.ActivationWhereInput | Prisma.ActivationWhereInput[];
    OR?: Prisma.ActivationWhereInput[];
    NOT?: Prisma.ActivationWhereInput | Prisma.ActivationWhereInput[];
    licenseId?: Prisma.StringFilter<"Activation"> | string;
    machineId?: Prisma.StringFilter<"Activation"> | string;
    activatedAt?: Prisma.DateTimeFilter<"Activation"> | Date | string;
    lastSeen?: Prisma.DateTimeFilter<"Activation"> | Date | string;
    license?: Prisma.XOR<Prisma.LicenseScalarRelationFilter, Prisma.LicenseWhereInput>;
}, "id" | "licenseId_machineId">;
export type ActivationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    licenseId?: Prisma.SortOrder;
    machineId?: Prisma.SortOrder;
    activatedAt?: Prisma.SortOrder;
    lastSeen?: Prisma.SortOrder;
    _count?: Prisma.ActivationCountOrderByAggregateInput;
    _max?: Prisma.ActivationMaxOrderByAggregateInput;
    _min?: Prisma.ActivationMinOrderByAggregateInput;
};
export type ActivationScalarWhereWithAggregatesInput = {
    AND?: Prisma.ActivationScalarWhereWithAggregatesInput | Prisma.ActivationScalarWhereWithAggregatesInput[];
    OR?: Prisma.ActivationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ActivationScalarWhereWithAggregatesInput | Prisma.ActivationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Activation"> | string;
    licenseId?: Prisma.StringWithAggregatesFilter<"Activation"> | string;
    machineId?: Prisma.StringWithAggregatesFilter<"Activation"> | string;
    activatedAt?: Prisma.DateTimeWithAggregatesFilter<"Activation"> | Date | string;
    lastSeen?: Prisma.DateTimeWithAggregatesFilter<"Activation"> | Date | string;
};
export type ActivationCreateInput = {
    id?: string;
    machineId: string;
    activatedAt?: Date | string;
    lastSeen?: Date | string;
    license: Prisma.LicenseCreateNestedOneWithoutActivationsInput;
};
export type ActivationUncheckedCreateInput = {
    id?: string;
    licenseId: string;
    machineId: string;
    activatedAt?: Date | string;
    lastSeen?: Date | string;
};
export type ActivationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    machineId?: Prisma.StringFieldUpdateOperationsInput | string;
    activatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastSeen?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    license?: Prisma.LicenseUpdateOneRequiredWithoutActivationsNestedInput;
};
export type ActivationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    licenseId?: Prisma.StringFieldUpdateOperationsInput | string;
    machineId?: Prisma.StringFieldUpdateOperationsInput | string;
    activatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastSeen?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActivationCreateManyInput = {
    id?: string;
    licenseId: string;
    machineId: string;
    activatedAt?: Date | string;
    lastSeen?: Date | string;
};
export type ActivationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    machineId?: Prisma.StringFieldUpdateOperationsInput | string;
    activatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastSeen?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActivationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    licenseId?: Prisma.StringFieldUpdateOperationsInput | string;
    machineId?: Prisma.StringFieldUpdateOperationsInput | string;
    activatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastSeen?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActivationListRelationFilter = {
    every?: Prisma.ActivationWhereInput;
    some?: Prisma.ActivationWhereInput;
    none?: Prisma.ActivationWhereInput;
};
export type ActivationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ActivationLicenseIdMachineIdCompoundUniqueInput = {
    licenseId: string;
    machineId: string;
};
export type ActivationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    licenseId?: Prisma.SortOrder;
    machineId?: Prisma.SortOrder;
    activatedAt?: Prisma.SortOrder;
    lastSeen?: Prisma.SortOrder;
};
export type ActivationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    licenseId?: Prisma.SortOrder;
    machineId?: Prisma.SortOrder;
    activatedAt?: Prisma.SortOrder;
    lastSeen?: Prisma.SortOrder;
};
export type ActivationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    licenseId?: Prisma.SortOrder;
    machineId?: Prisma.SortOrder;
    activatedAt?: Prisma.SortOrder;
    lastSeen?: Prisma.SortOrder;
};
export type ActivationCreateNestedManyWithoutLicenseInput = {
    create?: Prisma.XOR<Prisma.ActivationCreateWithoutLicenseInput, Prisma.ActivationUncheckedCreateWithoutLicenseInput> | Prisma.ActivationCreateWithoutLicenseInput[] | Prisma.ActivationUncheckedCreateWithoutLicenseInput[];
    connectOrCreate?: Prisma.ActivationCreateOrConnectWithoutLicenseInput | Prisma.ActivationCreateOrConnectWithoutLicenseInput[];
    createMany?: Prisma.ActivationCreateManyLicenseInputEnvelope;
    connect?: Prisma.ActivationWhereUniqueInput | Prisma.ActivationWhereUniqueInput[];
};
export type ActivationUncheckedCreateNestedManyWithoutLicenseInput = {
    create?: Prisma.XOR<Prisma.ActivationCreateWithoutLicenseInput, Prisma.ActivationUncheckedCreateWithoutLicenseInput> | Prisma.ActivationCreateWithoutLicenseInput[] | Prisma.ActivationUncheckedCreateWithoutLicenseInput[];
    connectOrCreate?: Prisma.ActivationCreateOrConnectWithoutLicenseInput | Prisma.ActivationCreateOrConnectWithoutLicenseInput[];
    createMany?: Prisma.ActivationCreateManyLicenseInputEnvelope;
    connect?: Prisma.ActivationWhereUniqueInput | Prisma.ActivationWhereUniqueInput[];
};
export type ActivationUpdateManyWithoutLicenseNestedInput = {
    create?: Prisma.XOR<Prisma.ActivationCreateWithoutLicenseInput, Prisma.ActivationUncheckedCreateWithoutLicenseInput> | Prisma.ActivationCreateWithoutLicenseInput[] | Prisma.ActivationUncheckedCreateWithoutLicenseInput[];
    connectOrCreate?: Prisma.ActivationCreateOrConnectWithoutLicenseInput | Prisma.ActivationCreateOrConnectWithoutLicenseInput[];
    upsert?: Prisma.ActivationUpsertWithWhereUniqueWithoutLicenseInput | Prisma.ActivationUpsertWithWhereUniqueWithoutLicenseInput[];
    createMany?: Prisma.ActivationCreateManyLicenseInputEnvelope;
    set?: Prisma.ActivationWhereUniqueInput | Prisma.ActivationWhereUniqueInput[];
    disconnect?: Prisma.ActivationWhereUniqueInput | Prisma.ActivationWhereUniqueInput[];
    delete?: Prisma.ActivationWhereUniqueInput | Prisma.ActivationWhereUniqueInput[];
    connect?: Prisma.ActivationWhereUniqueInput | Prisma.ActivationWhereUniqueInput[];
    update?: Prisma.ActivationUpdateWithWhereUniqueWithoutLicenseInput | Prisma.ActivationUpdateWithWhereUniqueWithoutLicenseInput[];
    updateMany?: Prisma.ActivationUpdateManyWithWhereWithoutLicenseInput | Prisma.ActivationUpdateManyWithWhereWithoutLicenseInput[];
    deleteMany?: Prisma.ActivationScalarWhereInput | Prisma.ActivationScalarWhereInput[];
};
export type ActivationUncheckedUpdateManyWithoutLicenseNestedInput = {
    create?: Prisma.XOR<Prisma.ActivationCreateWithoutLicenseInput, Prisma.ActivationUncheckedCreateWithoutLicenseInput> | Prisma.ActivationCreateWithoutLicenseInput[] | Prisma.ActivationUncheckedCreateWithoutLicenseInput[];
    connectOrCreate?: Prisma.ActivationCreateOrConnectWithoutLicenseInput | Prisma.ActivationCreateOrConnectWithoutLicenseInput[];
    upsert?: Prisma.ActivationUpsertWithWhereUniqueWithoutLicenseInput | Prisma.ActivationUpsertWithWhereUniqueWithoutLicenseInput[];
    createMany?: Prisma.ActivationCreateManyLicenseInputEnvelope;
    set?: Prisma.ActivationWhereUniqueInput | Prisma.ActivationWhereUniqueInput[];
    disconnect?: Prisma.ActivationWhereUniqueInput | Prisma.ActivationWhereUniqueInput[];
    delete?: Prisma.ActivationWhereUniqueInput | Prisma.ActivationWhereUniqueInput[];
    connect?: Prisma.ActivationWhereUniqueInput | Prisma.ActivationWhereUniqueInput[];
    update?: Prisma.ActivationUpdateWithWhereUniqueWithoutLicenseInput | Prisma.ActivationUpdateWithWhereUniqueWithoutLicenseInput[];
    updateMany?: Prisma.ActivationUpdateManyWithWhereWithoutLicenseInput | Prisma.ActivationUpdateManyWithWhereWithoutLicenseInput[];
    deleteMany?: Prisma.ActivationScalarWhereInput | Prisma.ActivationScalarWhereInput[];
};
export type ActivationCreateWithoutLicenseInput = {
    id?: string;
    machineId: string;
    activatedAt?: Date | string;
    lastSeen?: Date | string;
};
export type ActivationUncheckedCreateWithoutLicenseInput = {
    id?: string;
    machineId: string;
    activatedAt?: Date | string;
    lastSeen?: Date | string;
};
export type ActivationCreateOrConnectWithoutLicenseInput = {
    where: Prisma.ActivationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ActivationCreateWithoutLicenseInput, Prisma.ActivationUncheckedCreateWithoutLicenseInput>;
};
export type ActivationCreateManyLicenseInputEnvelope = {
    data: Prisma.ActivationCreateManyLicenseInput | Prisma.ActivationCreateManyLicenseInput[];
    skipDuplicates?: boolean;
};
export type ActivationUpsertWithWhereUniqueWithoutLicenseInput = {
    where: Prisma.ActivationWhereUniqueInput;
    update: Prisma.XOR<Prisma.ActivationUpdateWithoutLicenseInput, Prisma.ActivationUncheckedUpdateWithoutLicenseInput>;
    create: Prisma.XOR<Prisma.ActivationCreateWithoutLicenseInput, Prisma.ActivationUncheckedCreateWithoutLicenseInput>;
};
export type ActivationUpdateWithWhereUniqueWithoutLicenseInput = {
    where: Prisma.ActivationWhereUniqueInput;
    data: Prisma.XOR<Prisma.ActivationUpdateWithoutLicenseInput, Prisma.ActivationUncheckedUpdateWithoutLicenseInput>;
};
export type ActivationUpdateManyWithWhereWithoutLicenseInput = {
    where: Prisma.ActivationScalarWhereInput;
    data: Prisma.XOR<Prisma.ActivationUpdateManyMutationInput, Prisma.ActivationUncheckedUpdateManyWithoutLicenseInput>;
};
export type ActivationScalarWhereInput = {
    AND?: Prisma.ActivationScalarWhereInput | Prisma.ActivationScalarWhereInput[];
    OR?: Prisma.ActivationScalarWhereInput[];
    NOT?: Prisma.ActivationScalarWhereInput | Prisma.ActivationScalarWhereInput[];
    id?: Prisma.StringFilter<"Activation"> | string;
    licenseId?: Prisma.StringFilter<"Activation"> | string;
    machineId?: Prisma.StringFilter<"Activation"> | string;
    activatedAt?: Prisma.DateTimeFilter<"Activation"> | Date | string;
    lastSeen?: Prisma.DateTimeFilter<"Activation"> | Date | string;
};
export type ActivationCreateManyLicenseInput = {
    id?: string;
    machineId: string;
    activatedAt?: Date | string;
    lastSeen?: Date | string;
};
export type ActivationUpdateWithoutLicenseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    machineId?: Prisma.StringFieldUpdateOperationsInput | string;
    activatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastSeen?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActivationUncheckedUpdateWithoutLicenseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    machineId?: Prisma.StringFieldUpdateOperationsInput | string;
    activatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastSeen?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActivationUncheckedUpdateManyWithoutLicenseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    machineId?: Prisma.StringFieldUpdateOperationsInput | string;
    activatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastSeen?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActivationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    licenseId?: boolean;
    machineId?: boolean;
    activatedAt?: boolean;
    lastSeen?: boolean;
    license?: boolean | Prisma.LicenseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["activation"]>;
export type ActivationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    licenseId?: boolean;
    machineId?: boolean;
    activatedAt?: boolean;
    lastSeen?: boolean;
    license?: boolean | Prisma.LicenseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["activation"]>;
export type ActivationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    licenseId?: boolean;
    machineId?: boolean;
    activatedAt?: boolean;
    lastSeen?: boolean;
    license?: boolean | Prisma.LicenseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["activation"]>;
export type ActivationSelectScalar = {
    id?: boolean;
    licenseId?: boolean;
    machineId?: boolean;
    activatedAt?: boolean;
    lastSeen?: boolean;
};
export type ActivationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "licenseId" | "machineId" | "activatedAt" | "lastSeen", ExtArgs["result"]["activation"]>;
export type ActivationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    license?: boolean | Prisma.LicenseDefaultArgs<ExtArgs>;
};
export type ActivationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    license?: boolean | Prisma.LicenseDefaultArgs<ExtArgs>;
};
export type ActivationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    license?: boolean | Prisma.LicenseDefaultArgs<ExtArgs>;
};
export type $ActivationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Activation";
    objects: {
        license: Prisma.$LicensePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        licenseId: string;
        machineId: string;
        activatedAt: Date;
        lastSeen: Date;
    }, ExtArgs["result"]["activation"]>;
    composites: {};
};
export type ActivationGetPayload<S extends boolean | null | undefined | ActivationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ActivationPayload, S>;
export type ActivationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ActivationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ActivationCountAggregateInputType | true;
};
export interface ActivationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Activation'];
        meta: {
            name: 'Activation';
        };
    };
    findUnique<T extends ActivationFindUniqueArgs>(args: Prisma.SelectSubset<T, ActivationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ActivationClient<runtime.Types.Result.GetResult<Prisma.$ActivationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ActivationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ActivationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ActivationClient<runtime.Types.Result.GetResult<Prisma.$ActivationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ActivationFindFirstArgs>(args?: Prisma.SelectSubset<T, ActivationFindFirstArgs<ExtArgs>>): Prisma.Prisma__ActivationClient<runtime.Types.Result.GetResult<Prisma.$ActivationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ActivationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ActivationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ActivationClient<runtime.Types.Result.GetResult<Prisma.$ActivationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ActivationFindManyArgs>(args?: Prisma.SelectSubset<T, ActivationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActivationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ActivationCreateArgs>(args: Prisma.SelectSubset<T, ActivationCreateArgs<ExtArgs>>): Prisma.Prisma__ActivationClient<runtime.Types.Result.GetResult<Prisma.$ActivationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ActivationCreateManyArgs>(args?: Prisma.SelectSubset<T, ActivationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ActivationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ActivationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActivationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ActivationDeleteArgs>(args: Prisma.SelectSubset<T, ActivationDeleteArgs<ExtArgs>>): Prisma.Prisma__ActivationClient<runtime.Types.Result.GetResult<Prisma.$ActivationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ActivationUpdateArgs>(args: Prisma.SelectSubset<T, ActivationUpdateArgs<ExtArgs>>): Prisma.Prisma__ActivationClient<runtime.Types.Result.GetResult<Prisma.$ActivationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ActivationDeleteManyArgs>(args?: Prisma.SelectSubset<T, ActivationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ActivationUpdateManyArgs>(args: Prisma.SelectSubset<T, ActivationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ActivationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ActivationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActivationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ActivationUpsertArgs>(args: Prisma.SelectSubset<T, ActivationUpsertArgs<ExtArgs>>): Prisma.Prisma__ActivationClient<runtime.Types.Result.GetResult<Prisma.$ActivationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ActivationCountArgs>(args?: Prisma.Subset<T, ActivationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ActivationCountAggregateOutputType> : number>;
    aggregate<T extends ActivationAggregateArgs>(args: Prisma.Subset<T, ActivationAggregateArgs>): Prisma.PrismaPromise<GetActivationAggregateType<T>>;
    groupBy<T extends ActivationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ActivationGroupByArgs['orderBy'];
    } : {
        orderBy?: ActivationGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ActivationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ActivationFieldRefs;
}
export interface Prisma__ActivationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    license<T extends Prisma.LicenseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LicenseDefaultArgs<ExtArgs>>): Prisma.Prisma__LicenseClient<runtime.Types.Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ActivationFieldRefs {
    readonly id: Prisma.FieldRef<"Activation", 'String'>;
    readonly licenseId: Prisma.FieldRef<"Activation", 'String'>;
    readonly machineId: Prisma.FieldRef<"Activation", 'String'>;
    readonly activatedAt: Prisma.FieldRef<"Activation", 'DateTime'>;
    readonly lastSeen: Prisma.FieldRef<"Activation", 'DateTime'>;
}
export type ActivationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivationSelect<ExtArgs> | null;
    omit?: Prisma.ActivationOmit<ExtArgs> | null;
    include?: Prisma.ActivationInclude<ExtArgs> | null;
    where: Prisma.ActivationWhereUniqueInput;
};
export type ActivationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivationSelect<ExtArgs> | null;
    omit?: Prisma.ActivationOmit<ExtArgs> | null;
    include?: Prisma.ActivationInclude<ExtArgs> | null;
    where: Prisma.ActivationWhereUniqueInput;
};
export type ActivationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivationSelect<ExtArgs> | null;
    omit?: Prisma.ActivationOmit<ExtArgs> | null;
    include?: Prisma.ActivationInclude<ExtArgs> | null;
    where?: Prisma.ActivationWhereInput;
    orderBy?: Prisma.ActivationOrderByWithRelationInput | Prisma.ActivationOrderByWithRelationInput[];
    cursor?: Prisma.ActivationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ActivationScalarFieldEnum | Prisma.ActivationScalarFieldEnum[];
};
export type ActivationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivationSelect<ExtArgs> | null;
    omit?: Prisma.ActivationOmit<ExtArgs> | null;
    include?: Prisma.ActivationInclude<ExtArgs> | null;
    where?: Prisma.ActivationWhereInput;
    orderBy?: Prisma.ActivationOrderByWithRelationInput | Prisma.ActivationOrderByWithRelationInput[];
    cursor?: Prisma.ActivationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ActivationScalarFieldEnum | Prisma.ActivationScalarFieldEnum[];
};
export type ActivationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivationSelect<ExtArgs> | null;
    omit?: Prisma.ActivationOmit<ExtArgs> | null;
    include?: Prisma.ActivationInclude<ExtArgs> | null;
    where?: Prisma.ActivationWhereInput;
    orderBy?: Prisma.ActivationOrderByWithRelationInput | Prisma.ActivationOrderByWithRelationInput[];
    cursor?: Prisma.ActivationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ActivationScalarFieldEnum | Prisma.ActivationScalarFieldEnum[];
};
export type ActivationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivationSelect<ExtArgs> | null;
    omit?: Prisma.ActivationOmit<ExtArgs> | null;
    include?: Prisma.ActivationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ActivationCreateInput, Prisma.ActivationUncheckedCreateInput>;
};
export type ActivationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ActivationCreateManyInput | Prisma.ActivationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ActivationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ActivationOmit<ExtArgs> | null;
    data: Prisma.ActivationCreateManyInput | Prisma.ActivationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ActivationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ActivationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivationSelect<ExtArgs> | null;
    omit?: Prisma.ActivationOmit<ExtArgs> | null;
    include?: Prisma.ActivationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ActivationUpdateInput, Prisma.ActivationUncheckedUpdateInput>;
    where: Prisma.ActivationWhereUniqueInput;
};
export type ActivationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ActivationUpdateManyMutationInput, Prisma.ActivationUncheckedUpdateManyInput>;
    where?: Prisma.ActivationWhereInput;
    limit?: number;
};
export type ActivationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ActivationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ActivationUpdateManyMutationInput, Prisma.ActivationUncheckedUpdateManyInput>;
    where?: Prisma.ActivationWhereInput;
    limit?: number;
    include?: Prisma.ActivationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ActivationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivationSelect<ExtArgs> | null;
    omit?: Prisma.ActivationOmit<ExtArgs> | null;
    include?: Prisma.ActivationInclude<ExtArgs> | null;
    where: Prisma.ActivationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ActivationCreateInput, Prisma.ActivationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ActivationUpdateInput, Prisma.ActivationUncheckedUpdateInput>;
};
export type ActivationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivationSelect<ExtArgs> | null;
    omit?: Prisma.ActivationOmit<ExtArgs> | null;
    include?: Prisma.ActivationInclude<ExtArgs> | null;
    where: Prisma.ActivationWhereUniqueInput;
};
export type ActivationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActivationWhereInput;
    limit?: number;
};
export type ActivationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivationSelect<ExtArgs> | null;
    omit?: Prisma.ActivationOmit<ExtArgs> | null;
    include?: Prisma.ActivationInclude<ExtArgs> | null;
};
