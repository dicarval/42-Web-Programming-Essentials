#!/bin/bash
if [ $# -eq 0 ]; then
	echo "No arguments supplied"
fi

args=$#
for (( i=1; i<=args; i++ ))
do
	mkdir "ex${!i}"
done
