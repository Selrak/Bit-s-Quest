# Makefile for building a runnable code for a given Bit's Quest level

%: %.jsx
	m4 $^ > current.jsx
	vim current.jsx
