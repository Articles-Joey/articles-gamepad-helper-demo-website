import { Suspense } from "react";
import PageContent from "./PageContent";

export default function Page() {
    return (
        <Suspense>
            <PageContent />
        </Suspense>
    )
}