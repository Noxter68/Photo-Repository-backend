import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LicenseModel = runtime.Types.Result.DefaultSelection<Prisma.$LicensePayload>;
export type AggregateLicense = {
    _count: LicenseCountAggregateOutputType | null;
    _avg: LicenseAvgAggregateOutputType | null;
    _sum: LicenseSumAggregateOutputType | null;
    _min: LicenseMinAggregateOutputType | null;
    _max: LicenseMaxAggregateOutputType | null;
};
export type LicenseAvgAggregateOutputType = {
    maxMachines: number | null;
};
export type LicenseSumAggregateOutputType = {
    maxMachines: number | null;
};
export type LicenseMinAggregateOutputType = {
    id: string | null;
    key: string | null;
    email: string | null;
    name: string | null;
    phone: string | null;
    country: string | null;
    stripeSessionId: string | null;
    maxMachines: number | null;
    active: boolean | null;
    createdAt: Date | null;
};
export type LicenseMaxAggregateOutputType = {
    id: string | null;
    key: string | null;
    email: string | null;
    name: string | null;
    phone: string | null;
    country: string | null;
    stripeSessionId: string | null;
    maxMachines: number | null;
    active: boolean | null;
    createdAt: Date | null;
};
export type LicenseCountAggregateOutputType = {
    id: number;
    key: number;
    email: number;
    name: number;
    phone: number;
    country: number;
    stripeSessionId: number;
    maxMachines: number;
    active: number;
    createdAt: number;
    _all: number;
};
export type LicenseAvgAggregateInputType = {
    maxMachines?: true;
};
export type LicenseSumAggregateInputType = {
    maxMachines?: true;
};
export type LicenseMinAggregateInputType = {
    id?: true;
    key?: true;
    email?: true;
    name?: true;
    phone?: true;
    country?: true;
    stripeSessionId?: true;
    maxMachines?: true;
    active?: true;
    createdAt?: true;
};
export type LicenseMaxAggregateInputType = {
    id?: true;
    key?: true;
    email?: true;
    name?: true;
    phone?: true;
    country?: true;
    stripeSessionId?: true;
    maxMachines?: true;
    active?: true;
    createdAt?: true;
};
export type LicenseCountAggregateInputType = {
    id?: true;
    key?: true;
    email?: true;
    name?: true;
    phone?: true;
    country?: true;
    stripeSessionId?: true;
    maxMachines?: true;
    active?: true;
    createdAt?: true;
    _all?: true;
};
export type LicenseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LicenseWhereInput;
    orderBy?: Prisma.LicenseOrderByWithRelationInput | Prisma.LicenseOrderByWithRelationInput[];
    cursor?: Prisma.LicenseWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LicenseCountAggregateInputType;
    _avg?: LicenseAvgAggregateInputType;
    _sum?: LicenseSumAggregateInputType;
    _min?: LicenseMinAggregateInputType;
    _max?: LicenseMaxAggregateInputType;
};
export type GetLicenseAggregateType<T extends LicenseAggregateArgs> = {
    [P in keyof T & keyof AggregateLicense]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLicense[P]> : Prisma.GetScalarType<T[P], AggregateLicense[P]>;
};
export type LicenseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LicenseWhereInput;
    orderBy?: Prisma.LicenseOrderByWithAggregationInput | Prisma.LicenseOrderByWithAggregationInput[];
    by: Prisma.LicenseScalarFieldEnum[] | Prisma.LicenseScalarFieldEnum;
    having?: Prisma.LicenseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LicenseCountAggregateInputType | true;
    _avg?: LicenseAvgAggregateInputType;
    _sum?: LicenseSumAggregateInputType;
    _min?: LicenseMinAggregateInputType;
    _max?: LicenseMaxAggregateInputType;
};
export type LicenseGroupByOutputType = {
    id: string;
    key: string;
    email: string;
    name: string | null;
    phone: string | null;
    country: string | null;
    stripeSessionId: string | null;
    maxMachines: number;
    active: boolean;
    createdAt: Date;
    _count: LicenseCountAggregateOutputType | null;
    _avg: LicenseAvgAggregateOutputType | null;
    _sum: LicenseSumAggregateOutputType | null;
    _min: LicenseMinAggregateOutputType | null;
    _max: LicenseMaxAggregateOutputType | null;
};
export type GetLicenseGroupByPayload<T extends LicenseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LicenseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LicenseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LicenseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LicenseGroupByOutputType[P]>;
}>>;
export type LicenseWhereInput = {
    AND?: Prisma.LicenseWhereInput | Prisma.LicenseWhereInput[];
    OR?: Prisma.LicenseWhereInput[];
    NOT?: Prisma.LicenseWhereInput | Prisma.LicenseWhereInput[];
    id?: Prisma.StringFilter<"License"> | string;
    key?: Prisma.StringFilter<"License"> | string;
    email?: Prisma.StringFilter<"License"> | string;
    name?: Prisma.StringNullableFilter<"License"> | string | null;
    phone?: Prisma.StringNullableFilter<"License"> | string | null;
    country?: Prisma.StringNullableFilter<"License"> | string | null;
    stripeSessionId?: Prisma.StringNullableFilter<"License"> | string | null;
    maxMachines?: Prisma.IntFilter<"License"> | number;
    active?: Prisma.BoolFilter<"License"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"License"> | Date | string;
    activations?: Prisma.ActivationListRelationFilter;
};
export type LicenseOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    country?: Prisma.SortOrderInput | Prisma.SortOrder;
    stripeSessionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    maxMachines?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    activations?: Prisma.ActivationOrderByRelationAggregateInput;
};
export type LicenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    key?: string;
    stripeSessionId?: string;
    AND?: Prisma.LicenseWhereInput | Prisma.LicenseWhereInput[];
    OR?: Prisma.LicenseWhereInput[];
    NOT?: Prisma.LicenseWhereInput | Prisma.LicenseWhereInput[];
    email?: Prisma.StringFilter<"License"> | string;
    name?: Prisma.StringNullableFilter<"License"> | string | null;
    phone?: Prisma.StringNullableFilter<"License"> | string | null;
    country?: Prisma.StringNullableFilter<"License"> | string | null;
    maxMachines?: Prisma.IntFilter<"License"> | number;
    active?: Prisma.BoolFilter<"License"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"License"> | Date | string;
    activations?: Prisma.ActivationListRelationFilter;
}, "id" | "key" | "stripeSessionId">;
export type LicenseOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    country?: Prisma.SortOrderInput | Prisma.SortOrder;
    stripeSessionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    maxMachines?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.LicenseCountOrderByAggregateInput;
    _avg?: Prisma.LicenseAvgOrderByAggregateInput;
    _max?: Prisma.LicenseMaxOrderByAggregateInput;
    _min?: Prisma.LicenseMinOrderByAggregateInput;
    _sum?: Prisma.LicenseSumOrderByAggregateInput;
};
export type LicenseScalarWhereWithAggregatesInput = {
    AND?: Prisma.LicenseScalarWhereWithAggregatesInput | Prisma.LicenseScalarWhereWithAggregatesInput[];
    OR?: Prisma.LicenseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LicenseScalarWhereWithAggregatesInput | Prisma.LicenseScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"License"> | string;
    key?: Prisma.StringWithAggregatesFilter<"License"> | string;
    email?: Prisma.StringWithAggregatesFilter<"License"> | string;
    name?: Prisma.StringNullableWithAggregatesFilter<"License"> | string | null;
    phone?: Prisma.StringNullableWithAggregatesFilter<"License"> | string | null;
    country?: Prisma.StringNullableWithAggregatesFilter<"License"> | string | null;
    stripeSessionId?: Prisma.StringNullableWithAggregatesFilter<"License"> | string | null;
    maxMachines?: Prisma.IntWithAggregatesFilter<"License"> | number;
    active?: Prisma.BoolWithAggregatesFilter<"License"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"License"> | Date | string;
};
export type LicenseCreateInput = {
    id?: string;
    key: string;
    email: string;
    name?: string | null;
    phone?: string | null;
    country?: string | null;
    stripeSessionId?: string | null;
    maxMachines?: number;
    active?: boolean;
    createdAt?: Date | string;
    activations?: Prisma.ActivationCreateNestedManyWithoutLicenseInput;
};
export type LicenseUncheckedCreateInput = {
    id?: string;
    key: string;
    email: string;
    name?: string | null;
    phone?: string | null;
    country?: string | null;
    stripeSessionId?: string | null;
    maxMachines?: number;
    active?: boolean;
    createdAt?: Date | string;
    activations?: Prisma.ActivationUncheckedCreateNestedManyWithoutLicenseInput;
};
export type LicenseUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeSessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    maxMachines?: Prisma.IntFieldUpdateOperationsInput | number;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    activations?: Prisma.ActivationUpdateManyWithoutLicenseNestedInput;
};
export type LicenseUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeSessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    maxMachines?: Prisma.IntFieldUpdateOperationsInput | number;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    activations?: Prisma.ActivationUncheckedUpdateManyWithoutLicenseNestedInput;
};
export type LicenseCreateManyInput = {
    id?: string;
    key: string;
    email: string;
    name?: string | null;
    phone?: string | null;
    country?: string | null;
    stripeSessionId?: string | null;
    maxMachines?: number;
    active?: boolean;
    createdAt?: Date | string;
};
export type LicenseUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeSessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    maxMachines?: Prisma.IntFieldUpdateOperationsInput | number;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LicenseUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeSessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    maxMachines?: Prisma.IntFieldUpdateOperationsInput | number;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LicenseCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    stripeSessionId?: Prisma.SortOrder;
    maxMachines?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LicenseAvgOrderByAggregateInput = {
    maxMachines?: Prisma.SortOrder;
};
export type LicenseMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    stripeSessionId?: Prisma.SortOrder;
    maxMachines?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LicenseMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    stripeSessionId?: Prisma.SortOrder;
    maxMachines?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LicenseSumOrderByAggregateInput = {
    maxMachines?: Prisma.SortOrder;
};
export type LicenseScalarRelationFilter = {
    is?: Prisma.LicenseWhereInput;
    isNot?: Prisma.LicenseWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type LicenseCreateNestedOneWithoutActivationsInput = {
    create?: Prisma.XOR<Prisma.LicenseCreateWithoutActivationsInput, Prisma.LicenseUncheckedCreateWithoutActivationsInput>;
    connectOrCreate?: Prisma.LicenseCreateOrConnectWithoutActivationsInput;
    connect?: Prisma.LicenseWhereUniqueInput;
};
export type LicenseUpdateOneRequiredWithoutActivationsNestedInput = {
    create?: Prisma.XOR<Prisma.LicenseCreateWithoutActivationsInput, Prisma.LicenseUncheckedCreateWithoutActivationsInput>;
    connectOrCreate?: Prisma.LicenseCreateOrConnectWithoutActivationsInput;
    upsert?: Prisma.LicenseUpsertWithoutActivationsInput;
    connect?: Prisma.LicenseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LicenseUpdateToOneWithWhereWithoutActivationsInput, Prisma.LicenseUpdateWithoutActivationsInput>, Prisma.LicenseUncheckedUpdateWithoutActivationsInput>;
};
export type LicenseCreateWithoutActivationsInput = {
    id?: string;
    key: string;
    email: string;
    name?: string | null;
    phone?: string | null;
    country?: string | null;
    stripeSessionId?: string | null;
    maxMachines?: number;
    active?: boolean;
    createdAt?: Date | string;
};
export type LicenseUncheckedCreateWithoutActivationsInput = {
    id?: string;
    key: string;
    email: string;
    name?: string | null;
    phone?: string | null;
    country?: string | null;
    stripeSessionId?: string | null;
    maxMachines?: number;
    active?: boolean;
    createdAt?: Date | string;
};
export type LicenseCreateOrConnectWithoutActivationsInput = {
    where: Prisma.LicenseWhereUniqueInput;
    create: Prisma.XOR<Prisma.LicenseCreateWithoutActivationsInput, Prisma.LicenseUncheckedCreateWithoutActivationsInput>;
};
export type LicenseUpsertWithoutActivationsInput = {
    update: Prisma.XOR<Prisma.LicenseUpdateWithoutActivationsInput, Prisma.LicenseUncheckedUpdateWithoutActivationsInput>;
    create: Prisma.XOR<Prisma.LicenseCreateWithoutActivationsInput, Prisma.LicenseUncheckedCreateWithoutActivationsInput>;
    where?: Prisma.LicenseWhereInput;
};
export type LicenseUpdateToOneWithWhereWithoutActivationsInput = {
    where?: Prisma.LicenseWhereInput;
    data: Prisma.XOR<Prisma.LicenseUpdateWithoutActivationsInput, Prisma.LicenseUncheckedUpdateWithoutActivationsInput>;
};
export type LicenseUpdateWithoutActivationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeSessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    maxMachines?: Prisma.IntFieldUpdateOperationsInput | number;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LicenseUncheckedUpdateWithoutActivationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeSessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    maxMachines?: Prisma.IntFieldUpdateOperationsInput | number;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LicenseCountOutputType = {
    activations: number;
};
export type LicenseCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    activations?: boolean | LicenseCountOutputTypeCountActivationsArgs;
};
export type LicenseCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LicenseCountOutputTypeSelect<ExtArgs> | null;
};
export type LicenseCountOutputTypeCountActivationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActivationWhereInput;
};
export type LicenseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    key?: boolean;
    email?: boolean;
    name?: boolean;
    phone?: boolean;
    country?: boolean;
    stripeSessionId?: boolean;
    maxMachines?: boolean;
    active?: boolean;
    createdAt?: boolean;
    activations?: boolean | Prisma.License$activationsArgs<ExtArgs>;
    _count?: boolean | Prisma.LicenseCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["license"]>;
export type LicenseSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    key?: boolean;
    email?: boolean;
    name?: boolean;
    phone?: boolean;
    country?: boolean;
    stripeSessionId?: boolean;
    maxMachines?: boolean;
    active?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["license"]>;
export type LicenseSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    key?: boolean;
    email?: boolean;
    name?: boolean;
    phone?: boolean;
    country?: boolean;
    stripeSessionId?: boolean;
    maxMachines?: boolean;
    active?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["license"]>;
export type LicenseSelectScalar = {
    id?: boolean;
    key?: boolean;
    email?: boolean;
    name?: boolean;
    phone?: boolean;
    country?: boolean;
    stripeSessionId?: boolean;
    maxMachines?: boolean;
    active?: boolean;
    createdAt?: boolean;
};
export type LicenseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "key" | "email" | "name" | "phone" | "country" | "stripeSessionId" | "maxMachines" | "active" | "createdAt", ExtArgs["result"]["license"]>;
export type LicenseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    activations?: boolean | Prisma.License$activationsArgs<ExtArgs>;
    _count?: boolean | Prisma.LicenseCountOutputTypeDefaultArgs<ExtArgs>;
};
export type LicenseIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type LicenseIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $LicensePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "License";
    objects: {
        activations: Prisma.$ActivationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        key: string;
        email: string;
        name: string | null;
        phone: string | null;
        country: string | null;
        stripeSessionId: string | null;
        maxMachines: number;
        active: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["license"]>;
    composites: {};
};
export type LicenseGetPayload<S extends boolean | null | undefined | LicenseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LicensePayload, S>;
export type LicenseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LicenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LicenseCountAggregateInputType | true;
};
export interface LicenseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['License'];
        meta: {
            name: 'License';
        };
    };
    findUnique<T extends LicenseFindUniqueArgs>(args: Prisma.SelectSubset<T, LicenseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LicenseClient<runtime.Types.Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LicenseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LicenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LicenseClient<runtime.Types.Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LicenseFindFirstArgs>(args?: Prisma.SelectSubset<T, LicenseFindFirstArgs<ExtArgs>>): Prisma.Prisma__LicenseClient<runtime.Types.Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LicenseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LicenseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LicenseClient<runtime.Types.Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LicenseFindManyArgs>(args?: Prisma.SelectSubset<T, LicenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LicenseCreateArgs>(args: Prisma.SelectSubset<T, LicenseCreateArgs<ExtArgs>>): Prisma.Prisma__LicenseClient<runtime.Types.Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LicenseCreateManyArgs>(args?: Prisma.SelectSubset<T, LicenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LicenseCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LicenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LicenseDeleteArgs>(args: Prisma.SelectSubset<T, LicenseDeleteArgs<ExtArgs>>): Prisma.Prisma__LicenseClient<runtime.Types.Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LicenseUpdateArgs>(args: Prisma.SelectSubset<T, LicenseUpdateArgs<ExtArgs>>): Prisma.Prisma__LicenseClient<runtime.Types.Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LicenseDeleteManyArgs>(args?: Prisma.SelectSubset<T, LicenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LicenseUpdateManyArgs>(args: Prisma.SelectSubset<T, LicenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LicenseUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LicenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LicenseUpsertArgs>(args: Prisma.SelectSubset<T, LicenseUpsertArgs<ExtArgs>>): Prisma.Prisma__LicenseClient<runtime.Types.Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LicenseCountArgs>(args?: Prisma.Subset<T, LicenseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LicenseCountAggregateOutputType> : number>;
    aggregate<T extends LicenseAggregateArgs>(args: Prisma.Subset<T, LicenseAggregateArgs>): Prisma.PrismaPromise<GetLicenseAggregateType<T>>;
    groupBy<T extends LicenseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LicenseGroupByArgs['orderBy'];
    } : {
        orderBy?: LicenseGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LicenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLicenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LicenseFieldRefs;
}
export interface Prisma__LicenseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    activations<T extends Prisma.License$activationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.License$activationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActivationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LicenseFieldRefs {
    readonly id: Prisma.FieldRef<"License", 'String'>;
    readonly key: Prisma.FieldRef<"License", 'String'>;
    readonly email: Prisma.FieldRef<"License", 'String'>;
    readonly name: Prisma.FieldRef<"License", 'String'>;
    readonly phone: Prisma.FieldRef<"License", 'String'>;
    readonly country: Prisma.FieldRef<"License", 'String'>;
    readonly stripeSessionId: Prisma.FieldRef<"License", 'String'>;
    readonly maxMachines: Prisma.FieldRef<"License", 'Int'>;
    readonly active: Prisma.FieldRef<"License", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"License", 'DateTime'>;
}
export type LicenseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LicenseSelect<ExtArgs> | null;
    omit?: Prisma.LicenseOmit<ExtArgs> | null;
    include?: Prisma.LicenseInclude<ExtArgs> | null;
    where: Prisma.LicenseWhereUniqueInput;
};
export type LicenseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LicenseSelect<ExtArgs> | null;
    omit?: Prisma.LicenseOmit<ExtArgs> | null;
    include?: Prisma.LicenseInclude<ExtArgs> | null;
    where: Prisma.LicenseWhereUniqueInput;
};
export type LicenseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LicenseSelect<ExtArgs> | null;
    omit?: Prisma.LicenseOmit<ExtArgs> | null;
    include?: Prisma.LicenseInclude<ExtArgs> | null;
    where?: Prisma.LicenseWhereInput;
    orderBy?: Prisma.LicenseOrderByWithRelationInput | Prisma.LicenseOrderByWithRelationInput[];
    cursor?: Prisma.LicenseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LicenseScalarFieldEnum | Prisma.LicenseScalarFieldEnum[];
};
export type LicenseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LicenseSelect<ExtArgs> | null;
    omit?: Prisma.LicenseOmit<ExtArgs> | null;
    include?: Prisma.LicenseInclude<ExtArgs> | null;
    where?: Prisma.LicenseWhereInput;
    orderBy?: Prisma.LicenseOrderByWithRelationInput | Prisma.LicenseOrderByWithRelationInput[];
    cursor?: Prisma.LicenseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LicenseScalarFieldEnum | Prisma.LicenseScalarFieldEnum[];
};
export type LicenseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LicenseSelect<ExtArgs> | null;
    omit?: Prisma.LicenseOmit<ExtArgs> | null;
    include?: Prisma.LicenseInclude<ExtArgs> | null;
    where?: Prisma.LicenseWhereInput;
    orderBy?: Prisma.LicenseOrderByWithRelationInput | Prisma.LicenseOrderByWithRelationInput[];
    cursor?: Prisma.LicenseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LicenseScalarFieldEnum | Prisma.LicenseScalarFieldEnum[];
};
export type LicenseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LicenseSelect<ExtArgs> | null;
    omit?: Prisma.LicenseOmit<ExtArgs> | null;
    include?: Prisma.LicenseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LicenseCreateInput, Prisma.LicenseUncheckedCreateInput>;
};
export type LicenseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LicenseCreateManyInput | Prisma.LicenseCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LicenseCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LicenseSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LicenseOmit<ExtArgs> | null;
    data: Prisma.LicenseCreateManyInput | Prisma.LicenseCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LicenseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LicenseSelect<ExtArgs> | null;
    omit?: Prisma.LicenseOmit<ExtArgs> | null;
    include?: Prisma.LicenseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LicenseUpdateInput, Prisma.LicenseUncheckedUpdateInput>;
    where: Prisma.LicenseWhereUniqueInput;
};
export type LicenseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LicenseUpdateManyMutationInput, Prisma.LicenseUncheckedUpdateManyInput>;
    where?: Prisma.LicenseWhereInput;
    limit?: number;
};
export type LicenseUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LicenseSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LicenseOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LicenseUpdateManyMutationInput, Prisma.LicenseUncheckedUpdateManyInput>;
    where?: Prisma.LicenseWhereInput;
    limit?: number;
};
export type LicenseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LicenseSelect<ExtArgs> | null;
    omit?: Prisma.LicenseOmit<ExtArgs> | null;
    include?: Prisma.LicenseInclude<ExtArgs> | null;
    where: Prisma.LicenseWhereUniqueInput;
    create: Prisma.XOR<Prisma.LicenseCreateInput, Prisma.LicenseUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LicenseUpdateInput, Prisma.LicenseUncheckedUpdateInput>;
};
export type LicenseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LicenseSelect<ExtArgs> | null;
    omit?: Prisma.LicenseOmit<ExtArgs> | null;
    include?: Prisma.LicenseInclude<ExtArgs> | null;
    where: Prisma.LicenseWhereUniqueInput;
};
export type LicenseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LicenseWhereInput;
    limit?: number;
};
export type License$activationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LicenseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LicenseSelect<ExtArgs> | null;
    omit?: Prisma.LicenseOmit<ExtArgs> | null;
    include?: Prisma.LicenseInclude<ExtArgs> | null;
};
