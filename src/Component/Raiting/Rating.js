import "./Rating.css";
import React from "react";
import { Flex, Rate } from "antd";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const Rating = ({ rating, setRating, isMovieRating, movieRating }) => {
	const handleChange = (value) => {
		setRating(value);
	};
	return isMovieRating ? (
		<Flex gap='middle' vertical>
			<Rate allowHalf disabled value={movieRating} />
		</Flex>
	) : (
		<Flex gap='middle' vertical>
			<Rate allowHalf tooltips={desc} onChange={handleChange} value={rating} />
		</Flex>
	);
};

export default Rating;