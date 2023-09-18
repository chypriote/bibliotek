<script setup lang="ts">

import { ParsedContent } from '@nuxt/content/dist/runtime/types'
import { format } from 'date-fns'
import { Concert } from '~/types/Concert'

interface MyCustomParsedContent extends ParsedContent {
	data: Concert[]
}
const { data: concerts } = await useAsyncData(
	'concerts',
	() => queryContent<MyCustomParsedContent>('concerts').sort({ date: -1 }).find()
)
const displayDate = (date: string):string => format(new Date(date), 'yyyy-MM-dd')

</script>

<template>
<table>
	<tbody>
	<tr v-for="concert of concerts" :key="concert.id">
		<td style="padding: 0 1rem;">{{ displayDate(concert.date) }}</td>
		<td>{{ concert.title }}</td>
		<td>{{ concert.location }}</td>
	</tr>
	</tbody>
</table>
</template>
