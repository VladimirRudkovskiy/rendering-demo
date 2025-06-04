'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '../components/theme-provider';
import { clientSideFunction } from '@/utils/client-utils';


export default function ClientRoutePage() {
	const result = clientSideFunction();
	const theme = useTheme();

const settings = {
    dots: true,
  };
  return (
		<>
			<h1 style={{ color: theme.colors.secondary }}>Client Router Page</h1>
			<p>{result}</p>
		</>
  );
}
