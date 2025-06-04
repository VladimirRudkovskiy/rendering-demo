'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '../components/theme-provider';


export default function ClientRoutePage() {
	const theme = useTheme();

const settings = {
    dots: true,
  };
  return (
    <h1 style={{ color: theme.colors.secondary }}>Client Router Page</h1>
  );
}
