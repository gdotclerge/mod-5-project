class Api::V1::PhotosController < ApplicationController
  skip_before_action :authorized, only: [:index]





  def index
    @photos = Photo.all
    render json: @photos
  end


end
