'use client'
import { Card, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

function loading() {
  return (
    <section>
      <ReviewLoadingCard />
      <ReviewLoadingCard />
    </section>
  )
}
const ReviewLoadingCard = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center">
          <Skeleton className="w-12 h-12 rounded-full" />
          <div className="ml-4">
            <Skeleton className="w-[150px] h-4 mb-2" />
            <Skeleton className="w-[150px] h-4" />
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}

export default loading
