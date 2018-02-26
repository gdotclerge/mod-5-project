class Api::V1::TagsController < ApplicationController
  skip_before_action :authorized, only: [:index]


  def index
    @tags = Tag.all
    render json: @tags
  end


end
